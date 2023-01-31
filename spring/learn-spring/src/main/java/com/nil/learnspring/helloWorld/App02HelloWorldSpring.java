package com.nil.learnspring;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

public class App02HelloWorldSpring {
    public static void main(String[] args) {
        //launch a spring context
      var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
        //configure the things that we want spring to manage - @Configuration class

        // Retrieving beans managed by spring
        System.out.println(context.getBean("name")); //function er name ta within inverted comma
        System.out.println(context.getBean("age"));
        System.out.println(context.getBean("person"));
        System.out.println(context.getBean("person2MethodCall"));
        System.out.println(context.getBean("person3Parameters"));
      System.out.println(context.getBean("person4Parameters"));
        System.out.println(context.getBean("address2"));
        //or
        System.out.println("primary = "+context.getBean(Address.class));

        //printing all beans
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
    }
}
