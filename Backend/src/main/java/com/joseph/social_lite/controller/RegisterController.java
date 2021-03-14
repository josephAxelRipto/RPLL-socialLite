package com.joseph.social_lite.controller;

import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.application.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class RegisterController {

    @Autowired
    private AuthService authService;

    @PostMapping(value = "/SignUp")
    public void signUpToDB(@RequestBody final Member member){
        this.authService.signUp(member);
    }
}
