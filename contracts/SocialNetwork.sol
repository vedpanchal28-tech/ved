pragma solidity >=0.5.0 ;

//SPDX-License-Identifier: UNLICENSED

contract SocialNetwork {
string public name;
uint public postCount = 0;
mapping (uint => Post) public posts;

struct Post {
    uint id;
    string content;
    uint tipamount;
    address author;
}

event PostCreated(
    uint id,
    string content,
    uint tipamount,
    address author
);

constructor() {
    name="Ved Social Network";
}

function createpost(string memory _content) public {
    // Require valid content
    require(bytes(_content).length > 0);
    // Increment the post count
    postCount++;
    // Create New Post
    posts[postCount] = Post(postCount,_content,0,msg.sender); 
    // trigger Event
    emit PostCreated(postCount, _content, 0, msg.sender);
}











}