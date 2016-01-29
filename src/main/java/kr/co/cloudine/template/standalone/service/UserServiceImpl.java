/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package kr.co.cloudine.template.standalone.service;

import kr.co.cloudine.template.standalone.domain.User;
import kr.co.cloudine.template.standalone.exception.RefreshFailureException;
import kr.co.cloudine.template.standalone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Description.
 *
 * @author Edward KIM
 * @since 0.2
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User get(Integer id) {
        return userRepository.select(id);
    }

    @Override
    public boolean refresh(User user) {
        boolean result = userRepository.update(user) > 0;
        System.out.println(result);
        throw new RefreshFailureException("Transaction Failed");
    }

}
