# #Week4 ChatRoom App 
Po🚀Z22096017✨

## ChatRoom智能合約

- 合約地址:[0xfc9BfA7Bc4b1341a091c48D1433C4390E5551e43](https://goerli.etherscan.io/address/0xfc9BfA7Bc4b1341a091c48D1433C4390E5551e43)

### Solidity 合約
![](https://i.imgur.com/7yf6Csb.png)
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

contract ChatRoom {
    string public announcement;
    uint256 public announcementLastPaidVal;

    mapping(address => string[]) public userToMsgs;

    event newMessage(address user, string message);
    event newAnnouncementEvent(address user, string message);
    event newAnnouncementLastPaidVal(address user, uint256 value);

    function newMsg(string memory str) public {
        userToMsgs[msg.sender].push(str);
        emit newMessage(msg.sender, str);
    }
    function showLastestMsg(uint256 len, address user) public view returns (string[] memory) {
        require(len != 0 && user != address(0), "Input not valid");

        uint256 totalLen = userToMsgs[user].length;
        uint256 finalLen = totalLen > len ? len : totalLen;
        string[] memory retMsgs = new string[](finalLen); 
        if(finalLen == 0) return retMsgs;

        uint256 index = totalLen - 1;
        uint256 k = 0;
        while(index >= 0){
            retMsgs[k] = userToMsgs[user][index];
            if(index > 0) index--;
            k++;
            if(k == finalLen) break;
        }
        return retMsgs;
    }
    function newAnnouncement(string memory str) public payable {
        require(msg.value > announcementLastPaidVal, "Not enough fund");
        announcementLastPaidVal = msg.value;
        announcement = str;
        emit newAnnouncementEvent(msg.sender, str);
        emit newAnnouncementLastPaidVal(msg.sender, announcementLastPaidVal);
    }
}
```
## WAGMI 專案
### deploy on Vercel
[View on Vercel](https://zinstitute-week-4-chat-room-zy9v.vercel.app/)

### Github
GithubId : m061i6
[View on Github](https://github.com/m061i6/zinstitute-week-4-ChatRoom)

### CodeSandSox
[View on CodeSandSox](https://codesandbox.io/p/github/m061i6/zinstitute-week-4-ChatRoom/draft/crazy-curran)
