package com.joseph.social_lite.services;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private MemberRepository memberRepository;
    public long idMember;

    public List<Member> getUsers(){
        return this.memberRepository.findAll();
    }

    public LocalDate currentDate(){
        LocalDate date = LocalDate.now();
        return date;
    }

    public String dateFormater(Date date){
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        return formatter.format(date);
    }

    public void signUp(Member member){
        member.setMemberJoinDate(currentDate());

        Optional<Member> memberUsername = this.memberRepository.findMemberByUsername(member.getUsername());
        if (memberUsername.isPresent()){
            throw new IllegalStateException("Username is already exist");
        }
        this.memberRepository.save(member);
    }

    public Boolean login(String username, String password){
        Optional<Member> memberLogin = this.memberRepository.findMemberByUsernameAndPassword(username, password);
        if (memberLogin.isPresent()){
            this.idMember = memberLogin.get().getId();
            return true;
        }else{
            this.idMember = 0;
            throw new IllegalStateException("Uncorrect username or password");
        }
    }

    @Transactional
    public void changePassword(Long memberId, String oldPassword, String newPassword, String reTypeNewPassword){
        Member member = this.memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalStateException(
                        "Member with id " + memberId + "does not exist"
                ));
        if (oldPassword != null &&
                newPassword != null &&
                reTypeNewPassword != null &&
                oldPassword.equals(member.getPassword()) &&
                newPassword.equals(reTypeNewPassword) &&
                !oldPassword.equals(newPassword) &&
                newPassword.length() > 8){
            member.setPassword(newPassword);
        }
    }
}
