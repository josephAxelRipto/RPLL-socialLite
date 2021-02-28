package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

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

    public void signUpToDB(MemberRepository memberRepository){
        Member registerMember = new Member();
        Member registerMember2 = new Member();
        registerMember.setUsername("test");
        registerMember.setPassword("test");
        Date joinDate = new Date();
        registerMember.setMemberJoinDate(joinDate);
        Date birth = new Date();
        registerMember.setBirth(birth);
        registerMember.setFullname("test1");
        memberRepository.save(registerMember);

        registerMember2.setUsername("test2");
        registerMember2.setPassword("test2");
        registerMember2.setMemberJoinDate(joinDate);
        registerMember2.setBirth(birth);
        registerMember2.setFullname("test2");

        memberRepository.save(registerMember2);
    }
}
