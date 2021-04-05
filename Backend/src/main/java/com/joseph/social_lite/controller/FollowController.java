package com.joseph.social_lite.controller;

import com.joseph.social_lite.application.services.FollowServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class FollowController {
    @Autowired
    private FollowServices followServices;

    @PostMapping("follow/{followerId}/{followingId}")
    public void follow(@PathVariable("followerId") long followerId, @PathVariable("followingId") long followingId){
        this.followServices.follow(followerId, followingId);
    }

    public void getFollow(){

    }

    public void unfollow(){

    }
}
