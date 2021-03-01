package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import com.joseph.social_lite.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;

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
