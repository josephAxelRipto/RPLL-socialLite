package com.joseph.social_lite.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
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
    @Column(columnDefinition = "DATE", nullable = false)
    private LocalDate birth;
    @Column(nullable = false)
    private String fullname;
    @Column(columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDate memberJoinDate;
    private String bio;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String gender;
//    private String profileImage;

}
