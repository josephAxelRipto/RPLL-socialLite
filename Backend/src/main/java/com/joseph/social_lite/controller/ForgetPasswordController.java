package com.joseph.social_lite.controller;

import com.joseph.social_lite.application.services.AuthServices;
import com.joseph.social_lite.data.dto.CheckMemberByUsernameAndEmailDto;
import com.joseph.social_lite.data.dto.ForgetPasswordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ForgetPasswordController {

    @Autowired
    private AuthServices authServices;

    @GetMapping("CheckMemberByEmail")
    public Boolean checkMemberByUsernameAndEmail(@RequestBody CheckMemberByUsernameAndEmailDto checkMemberByUsernameAndEmailDto){
        return authServices.checkMemberByUsernameAndEmail(checkMemberByUsernameAndEmailDto.getUsername(), checkMemberByUsernameAndEmailDto.getEmail());
    }

    @PostMapping("ForgetPassword")
    public void forgetPassword(@RequestBody ForgetPasswordDto forgetPasswordDto){
        authServices.forgetPassword(forgetPasswordDto.getNewPassword(), forgetPasswordDto.getReTypeNewPassword());
    }
}
