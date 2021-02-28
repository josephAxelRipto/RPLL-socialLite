package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("api/")
public class RegisterController {
//    @Autowired
//    private MemberRepository memberRepository;
//    private Member registerMember = new Member();

//    private Member parseMemberFromForm(){
//        this.registerMember.setUsername("test");
//        this.registerMember.setPassword("test");
//        Date joinDate = new Date();
//        this.registerMember.setMemberJoinDate(joinDate);
//        Date birth = new Date();
//        this.registerMember.setBirth(birth);
//        this.registerMember.setFullname("test1");
//        return this.registerMember;
//    }

    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("SignUp")
    public void signUpToDB(){
        Member registerMember = new Member();
        Member registerMember2 = new Member();
        Member registerMember3 = new Member();
        registerMember.setUsername("test");
        registerMember.setPassword("test");
        Date joinDate = new Date();
        registerMember.setMemberJoinDate(joinDate);
        Date birth = new Date();
        registerMember.setBirth(birth);
        registerMember.setFullname("test1");
        this.memberRepository.save(registerMember);

        registerMember2.setUsername("test2");
        registerMember2.setPassword("test2");
        registerMember2.setMemberJoinDate(joinDate);
        registerMember2.setBirth(birth);
        registerMember2.setFullname("test2");

        this.memberRepository.save(registerMember2);

        registerMember3.setUsername("test2");
        registerMember3.setPassword("test2");
        registerMember3.setMemberJoinDate(joinDate);
        registerMember3.setBirth(birth);
        registerMember3.setFullname("test2");

        this.memberRepository.save(registerMember3);
    }
}
