package com.codingshuttle.projects.airBnbApp.controller;




import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class PingController {

    @GetMapping("/ping")
    public void ping(HttpServletResponse response) throws IOException {
        response.setStatus(200);
        response.getWriter().write("pong");
    }
}

