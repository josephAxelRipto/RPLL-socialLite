package com.joseph.social_lite.application.services;

import com.joseph.social_lite.data.repository.MemberRepository;
import com.joseph.social_lite.data.repository.PostRepository;
import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.domain.entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;

@Service
public class PostServices {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private MemberRepository memberRepository;

    private Post post;
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

    public List<Post> getPost(long id){
        member = new Member();
        member = memberRepository.getOne(id);
        return postRepository.findAllByOwnerOrderByDatePost(member);
    }
}
