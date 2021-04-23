package com.joseph.social_lite.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddBookmarkDto {
    @JsonProperty("idPost")
    private long idPost;
    @JsonProperty("idMember")
    private long idMember;
}
