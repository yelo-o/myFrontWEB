package com.my.control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/list")
public class IdListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("IdListServlet이 요청됨");
		
		
		
		
		/*
		//더미 아이디 배열 작성
		String[] idAll = new String[] {"id1", "id2"};
		
		//응답
		response.setContentType("application/json;charset=UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		
		//응답 내용 출력할 변수 초기화
		java.io.PrintWriter out = response.getWriter();
		
		//응답 내용 출력하기
		out.print("[");
		for(int i=0; i<idAll.length; i++) {
			if(i>0) {
				out.print(",");
			}
			out.print(i);
		}
		out.print("]");
		*/
		
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

}
