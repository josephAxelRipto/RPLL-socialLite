package org.socialLite.domain.entity;


/**
 * @author msj
 * @version 1.0
 * @created 28-Feb-2021 13.39.00
 */
public class Comment {

    private date dateComment;
    private int id;
    private String memberComment;
    private String username;

    public Comment() {

    }

    public void finalize() throws Throwable {

    }

    /**
     * @param id
     */
    public boolean deleteComment(int id) {
        return false;
    }

    /**
     * @param id
     * @param newComment
     */
    public boolean editComment(int id, String newComment) {
        return false;
    }

}