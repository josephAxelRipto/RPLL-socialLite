package com.joseph.social_lite.application.services;

import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.data.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AuthServices {
    @Autowired
    private MemberRepository memberRepository;
    private long idMember;
    private String email;
    private String username;

    public List<Member> getUsers(){
        return this.memberRepository.findAll();
    }

    public LocalDateTime currentDate(){
        LocalDateTime date = LocalDateTime.now();
        return date;
    }

    public Optional<Member> getMemberById(){
        return this.memberRepository.findById(this.getIdMember());
    }

    public Member signUp(Member member){
        member.setMemberJoinDate(currentDate());

        Optional<Member> memberUsername = this.memberRepository.findMemberByUsername(member.getUsername());
        if (memberUsername.isPresent()){
            throw new IllegalStateException("Username is already exist");
        }
        this.memberRepository.save(member);
        return member;
    }

    public long getIdMember(){
        return this.idMember;
    }

    public Boolean login(String username, String password){
        Optional<Member> memberLogin = this.memberRepository.findMemberByUsernameAndPassword(username, password);

        if (memberLogin.isPresent()){
            this.idMember = memberLogin.get().getId();
            System.out.println(this.idMember);
            return true;
        }else{
            this.idMember = 0;
            System.out.println(this.idMember);
            throw new IllegalStateException("Uncorrect username or password");
        }
    }
    public Boolean checkMemberByUsernameAndEmail(String username, String email){
        this.email = email;
        this.username = username;
        if(memberRepository.findMemberByUsernameAndEmail(username, email) == null){
            throw new IllegalStateException("Email not found");
        }else{
            return true;
        }
    }

    @Transactional
    public void forgetPassword(String newPassword, String reTypeNewPassword){
        Member member = memberRepository.findMemberByUsernameAndEmail(this.username, this.email);

        if(newPassword == null){
            throw new IllegalStateException("New password is required");
        }else if(reTypeNewPassword == null) {
            throw new IllegalStateException("Retype new password is required");
        }else if(!newPassword.equals(reTypeNewPassword)){
            throw new IllegalStateException("NewPassword is not the same as retypeNewPassword");
        }else{
            member.setPassword(newPassword);
        }
    }
}
