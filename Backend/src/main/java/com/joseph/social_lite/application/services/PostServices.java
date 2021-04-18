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

    private Post post;
    private Post tempPost;
    private Member member;

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

    public List<Post> getPostByIdMember(long id){
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
    public void updatePostCommentCount(long id){
        post = this.postRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                    "post with id " + id + " does not exist"
                ));
        post.setCountComment(post.getCountComment() + 1);

    }
    @Transactional
    public void updatePostLikeCount(long id){
        post = this.postRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "post with id " + id + " does not exist"
                ));
        post.setCountLike(post.getCountLike() + 1);

    }
}
