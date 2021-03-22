package com.joseph.social_lite.controller;

import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.application.services.AuthServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class LoginController {

    @Autowired
    private AuthServices authServices;

    @GetMapping("GetUsers")
    public List<Member> getUsers(){
        return this.authServices.getUsers();
    }

    @PostMapping("Login")
    public Optional<Member> login(@RequestBody final Member member){
        this.authServices.login(member.getUsername(), member.getPassword());
        return this.authServices.getMemberById();
    }

}
