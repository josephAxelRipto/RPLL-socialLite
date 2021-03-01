package com.joseph.social_lite.controller;

import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("api/EditProfile")
public class EditProfileController {
    @Autowired
    private AuthService authService;

    @PutMapping("/ChangePassword/{memberId}")
    public void changePassword(
            @PathVariable("memberId") Long memberId,
            @RequestParam() String oldPassword,
            @RequestParam() String newPassword,
            @RequestParam() String reTypeNewPassword
    ){
        this.authService.changePassword(memberId, oldPassword, newPassword, reTypeNewPassword);
    }
}
