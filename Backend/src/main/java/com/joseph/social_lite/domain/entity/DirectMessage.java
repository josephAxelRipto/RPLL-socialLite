package com.joseph.social_lite.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "direct_messeges")
public class DirectMessage {

    @Id
    @SequenceGenerator(
            name = "direct_messeges_sequence",
            sequenceName = "direct_messeges_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "direct_messeges_id_seq"
    )
    private long id;
    @Column(columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDate dateMessage;

    @OneToOne
    @JoinColumn(referencedColumnName = "username")
    private Member from;

    @Column(nullable = false)
    private String message;

    @OneToOne
    @JoinColumn(referencedColumnName = "username")
    private Member to;
}
