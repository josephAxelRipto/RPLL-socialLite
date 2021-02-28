package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
public class LoginController {

    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("Members")
    public List<Member> getUsers(){
        return this.memberRepository.findAll();
    }


}
