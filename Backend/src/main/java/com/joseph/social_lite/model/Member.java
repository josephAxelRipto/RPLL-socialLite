package com.joseph.social_lite.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name = "members")
public class Member {
    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "members_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "members_id_seq"
    )
    private long id;
    @Column(columnDefinition = "DATE")
    private LocalDate birth;
    private String fullname;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDate memberJoinDate;
    private String password;
    private String username;
    private String gender;
//    private String image;



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
