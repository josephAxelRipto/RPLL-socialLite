package com.joseph.social_lite.model;

public class Post {
    private String caption;
    private int countComment;
    private int countLike;
    private int datePost;
    private int id;
//    private binary image;
    public Like m_Like;
    public Comment m_Comment;
    public Member m_Member;
    public Bookmark m_Bookmark;

    public int deletePost(int id) {
        return 0;
    }

    public int editCaption(int id, String newCaption) {
        return 0;
    }
}
