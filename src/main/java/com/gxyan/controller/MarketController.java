package com.gxyan.controller;

import com.gxyan.common.ServerResponse;
import com.gxyan.pojo.Market;
import com.gxyan.service.IMarketService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("market")
public class MarketController {
    @Autowired
    private IMarketService marketService;

    @RequestMapping(value = "addActivity", method = RequestMethod.GET)
    public ServerResponse addActivity(Market market) {
        return marketService.addActivity(market);
    }
}
