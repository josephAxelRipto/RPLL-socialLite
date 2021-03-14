package com.joseph.social_lite.controller;

import com.joseph.social_lite.application.services.AuthService;
import com.joseph.social_lite.data.dto.ChangePasswordDto;
import com.joseph.social_lite.data.dto.EditProfileDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/")
public class EditProfileController {
    @Autowired
    private AuthService authService;

    @PostMapping("/ChangePassword/{memberId}")
    public void changePassword(
            @PathVariable("memberId") Long memberId,
            @RequestBody ChangePasswordDto changePasswordDto){
        this.authService.changePassword(memberId, changePasswordDto.getOldPassword(), changePasswordDto.getNewPassword(), changePasswordDto.getReTypeNewPassword());
    }

    @PostMapping("/EditProfile/{memberId}")
    public void editProfile(
            @PathVariable("memberId") Long memberId,
            @RequestBody EditProfileDto editProfileDto){
        this.authService.editProfile(memberId, editProfileDto.getName(), editProfileDto.getUsername(), editProfileDto.getBio(), editProfileDto.getEmail(), editProfileDto.getPhoneNumber());
    }
}
