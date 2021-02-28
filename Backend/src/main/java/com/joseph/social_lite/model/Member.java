package com.joseph.social_lite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "birth")
    private Date birth;
    @Column(name = "fullname")
    private String fullname;
    @Column(name = "member_join_date")
    private Date memberJoinDate;
    @Column(name = "password")
    private String password;
    @Column(name = "username")
    private String username;



    public Member() {

    }

    /**
     * @param username
     */
    public int countFollowers(String username) {
            return 0;
        }
    /**
    * @param username
    */
    public int countFollowing(String username) {
        return 0;
    }

    /**
     * @param username
     * @param data
     */
    public boolean editProfile(String username, Member data) {
        return false;
    }

    /**
     * @param username
     * @param password
     */
    public boolean logIn(String username, String password) {
        return false;
    }
    public boolean logOut() {
        return false;
    }
}
