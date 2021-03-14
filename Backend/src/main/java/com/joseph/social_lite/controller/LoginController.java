package com.joseph.social_lite.controller;

import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.application.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public Optional<Member> login(@RequestBody final Member member){
//        System.out.println(this.authService.idMember);
        this.authService.login(member.getUsername(), member.getPassword());
        return this.authService.getMemberById();
    }

}
