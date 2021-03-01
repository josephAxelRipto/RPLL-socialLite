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
    public Boolean login(@RequestBody final Member member){
        return this.authService.login(member.getUsername(), member.getPassword());
    }

}
