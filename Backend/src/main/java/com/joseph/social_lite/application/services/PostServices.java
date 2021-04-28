package com.joseph.social_lite.application.services;

import com.joseph.social_lite.data.repository.MemberRepository;
import com.joseph.social_lite.data.repository.PostRepository;
import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.domain.entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class PostServices {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private FollowServices followServices;

    private Post post;
    private Post tempPost;
    private Member member;
    public final int COMMENT = 0;
    public final int LIKE = 1;

    public LocalDateTime currentDate(){
        LocalDateTime date = LocalDateTime.now();
        return date;
    }

    public void posting(MultipartFile file,long id, String caption){
        member = new Member();
        member = memberRepository.getOne(id);
        this.post = new Post();

        String filename = StringUtils.cleanPath(file.getOriginalFilename());

        if (filename.contains("..")){
            System.out.println("not a valid file");
        }

        this.post.setFilename(filename);
        try {
            this.post.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }

        this.post.setOwner(member);
        this.post.setDatePost(currentDate());
        this.post.setCaption(caption);
        postRepository.save(this.post);
    }

    public ArrayList<Post> getPostByIdMember(long id){
        member = new Member();
        member = memberRepository.getOne(id);
        return postRepository.findAllByOwnerOrderByDatePost(member);
    }

    public ArrayList<Post> getPostForUser(){
        long countPost = postRepository.count();
        ArrayList<Post> post = new ArrayList<>();
        ArrayList<Long> showed = new ArrayList<>();

        for(int i = 0; i <= 100; i++){
            long random_id = (long)Math.floor(Math.random()*(countPost-1+1)+1);
            if(postRepository.findById(random_id).isPresent() && !showed.contains(random_id)){
                System.out.println("tes");
                tempPost = postRepository.getOne(random_id);
                post.add(tempPost);
                showed.add(random_id);
                System.out.println(post.size());
            }
        }
        return post;
    }

    @Transactional
    public void editCaption(long id, String caption){
        post = this.postRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "post with id " + id + " does not exist"
                ));
        post.setCaption(caption);
    }

    @Transactional
    public void updatePostCommentCountOrLikeCount(long id, boolean add, int type) {
        post = this.postRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "post with id " + id + " does not exist"
                ));
        if(type == 0){
            if (add) {
                post.setCountComment(post.getCountComment() + 1);
            } else {
                post.setCountComment(post.getCountComment() - 1);
            }
        }else{
            if (add) {
                post.setCountLike(post.getCountLike() + 1);
            } else {
                post.setCountLike(post.getCountLike() - 1);
            }
        }
    }

    public ArrayList<Post> getPostForMember(long idMember) {
        ArrayList<Member> listFollowing = followServices.getFollowing(idMember);
        ArrayList<Post> listPost = new ArrayList<>();
        if(listFollowing == null){
            return getPostForUser();
        }
        for(Member member: listFollowing){
            listPost.addAll(postRepository.findAllByOwnerOrderByDatePost(member));
        }
        return listPost;
    }

    public Post getPostByIdPost(long idPost){
        return postRepository.getOne(idPost);
    }
}
