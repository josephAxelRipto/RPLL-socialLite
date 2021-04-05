package com.joseph.social_lite.application.services;

import com.joseph.social_lite.data.repository.FollowRepository;
import com.joseph.social_lite.data.repository.MemberRepository;
import com.joseph.social_lite.domain.entity.Follow;
import com.joseph.social_lite.domain.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class FollowServices {
    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private MemberRepository memberRepository;

    private Follow follow;
    private Member follower;
    private Member following;

    public LocalDateTime currentDate(){
        LocalDateTime date = LocalDateTime.now();
        return date;
    }
    public void follow(long followerId,long followingId){
        this.follower = new Member();
        this.following = new Member();

        this.follower = memberRepository.getOne(followerId);
        this.following = memberRepository.getOne(followingId);

        this.follow = new Follow();
        this.follow.setDateFollow(currentDate());
        this.follow.setFollower(this.follower);
        this.follow.setFollowing(this.following);
        this.follow.setStatus(true);

        if (followerId == followingId){
            throw new IllegalStateException("Can't follow your self");
        }else{
            this.followRepository.save(this.follow);
        }
    }
}
