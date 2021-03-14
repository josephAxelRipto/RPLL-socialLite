package com.joseph.social_lite.application.services;

import com.joseph.social_lite.data.repository.MemberRepository;
import com.joseph.social_lite.domain.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class EditProfileServices {
    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public void changePassword(Long memberId, String oldPassword, String newPassword, String reTypeNewPassword){
        Member member = this.memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalStateException(
                        "Member with id " + memberId + " does not exist"
                ));

        String password = member.getPassword().toString();

        if(oldPassword == null){
            throw new IllegalStateException("Old password is required");
        }else if(newPassword == null){
            throw new IllegalStateException("New password is required");
        }else if(reTypeNewPassword == null){
            throw new IllegalStateException("Retype new password is required");
        }else if(!oldPassword.equals(password)){
            throw new IllegalStateException("Old password doesn't match");
        }else if(!newPassword.equals(reTypeNewPassword)){
            throw new IllegalStateException("Retype new password doesn't match");
        }else if(oldPassword.equals(newPassword)){
            throw new IllegalStateException("the old password and the new password are the same");
        }else if(newPassword.length() < 8){
            throw new IllegalStateException("New password must be more than 8 character");
        }else{
            member.setPassword(newPassword);
        }
    }

    @Transactional
    public void editProfile(Long memberId, String name, String username, String bio, String email, String phoneNumber){
        Member member = this.memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalStateException(
                        "Member with id " + memberId + " does not exist"
                ));

        if(name != null && !name.equals("")){
            member.setFullname(name);
        }
        if(username != null && !username.equals("")){
            member.setUsername(username);
        }
        if(bio != null && !bio.equals("")){
            member.setBio(bio);
        }
        if(email != null && !email.equals("")){
            member.setEmail(email);
        }
        if(phoneNumber != null && !phoneNumber.equals("")){
            member.setPhoneNumber(phoneNumber);
        }

    }
}