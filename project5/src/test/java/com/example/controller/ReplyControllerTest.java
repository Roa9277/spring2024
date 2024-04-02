package com.example.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.example.domain.ReplyVO;
import com.google.gson.Gson;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {com.example.config.RootConfig.class,
								 com.example.config.ServletConfig.class})
@Log4j
public class ReplyControllerTest {
	
	@Setter(onMethod_ = {@Autowired})
	private WebApplicationContext ctx;
	
	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(ctx).build();
	}
	
//	@Test
	public void testCreate() throws Exception {
		
		ReplyVO vo = new ReplyVO();
		
//		String bno = "14";
		
		vo.setReply("댓글");
		
		vo.setReplyer("홍길동");
		
		String jsonStr = new Gson().toJson(vo);
		
		log.info(jsonStr);
		
		mockMvc.perform(post("/replies/new")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonStr))
				.andExpect(status().is(200));
		
	}
	
//	@Test
	public void testGet() throws Exception {
		
		
		
	}
	
	
}





















