package org.socialLite.domain.entity;


/**
 * @author msj
 * @version 1.0
 * @created 28-Feb-2021 13.38.31
 */
public class Post {

	private String caption;
	private int countComment;
	private int countLike;
	private int datePost;
	private int id;
	private binary image;
	public Like m_Like;
	public Comment m_Comment;
	public Member m_Member;
	public Bookmark m_Bookmark;

	public Post(){

	}

	public void finalize() throws Throwable {

	}

	/**
	 * 
	 * @param id
	 */
	public int deletePost(int id){
		return 0;
	}

	/**
	 * 
	 * @param id
	 * @param newCaption
	 */
	public int editCaption(int id, String newCaption){
		return 0;
	}

}