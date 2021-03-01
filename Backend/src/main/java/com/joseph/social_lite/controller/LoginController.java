package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import com.joseph.social_lite.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class LoginController {

    @Autowired
    private AuthService authService;

    @GetMapping("GetUsers")
    public List<Member> getUsers(){
        return this.authService.getUsers();
    }

    @PostMapping("Login")
    public long login(@RequestBody final Member member){
//        System.out.println(this.authService.idMember);
        this.authService.login(member.getUsername(), member.getPassword());
        System.out.println("luar" + this.authService.idMember);


        return this.authService.getIdMember();
    }

}
