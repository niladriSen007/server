package com.nil.learnspring;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


record Address(String firstline,String city){}

record Person(String name,int age,Address address){}
@Configuration
public class HelloWorldConfiguration {
    @Bean
    public String name(){
        return "Niladri Sen"; }

    @Bean
    public int age(){
        return 23;
    }

    @Bean
    public Person person(){
        var p1 = new Person("Niladri",22,address());
        return p1;
    }

    @Bean
    public Person person2MethodCall(){
        return new Person(name(),age(),new Address("Madhyamgram","North 24 parganas"));
    }

    @Bean
    public Person person3Parameters(String name,int age,Address address3){
        return new Person(name,age,address3);
    }

    @Bean
    @Primary
    public Person person4Parameters(String name,int age, Address address){
        return new Person(name,age,address);
    }

    @Bean
    public Person person5Parameters(String name,int age, @Qualifier("address2Qualifier") Address address){
        return new Person(name,age,address);
    }

    @Bean(name = "address2") //just bean ke onno akta nam dilam😁😁
    @Qualifier("address2Qualifier")
    public Address address()
    {
        return new Address("Sripur","Kolkata");
    }

    @Bean(name = "address3") //just bean ke onno akta nam dilam😁😁

    public Address address3()
    {
        return new Address("New Town","CC2");
    }

}
