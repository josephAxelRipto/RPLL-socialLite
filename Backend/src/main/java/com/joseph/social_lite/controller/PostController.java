package com.joseph.social_lite.controller;

import com.joseph.social_lite.application.services.PostServices;
import com.joseph.social_lite.data.dto.PostDto;
import com.joseph.social_lite.domain.entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class PostController {
    @Autowired
    private PostServices postServices;

    @PostMapping("post/{id}")
    public void posting(@RequestParam("file") MultipartFile file , @RequestParam("caption") String caption , @PathVariable("id") Long id){
        postServices.posting(file, id, caption);
    }
}
