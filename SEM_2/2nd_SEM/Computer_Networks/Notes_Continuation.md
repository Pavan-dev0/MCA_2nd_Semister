# Description of Each Layer
## 1  Application Layer
- Communation takes place b/w two devices example a person 1 is using a whatsapp (application) where as the reciever side is also using whats app soo they tend to exchange the messages 
- Supporting networks are 
	- FTP(File Transfer protocol)
	- SMTP(Simple Main Transfer Protocol)
	- HTTP(Hyper Text transfer protocol)
	- TELNET(Teletype Network)
	- SSH(Secure Shell)
	- SNMP(Simple Network Management Protocol)
	- DNS(Domain Name system)
	- IGMP(Internet Group Management Protocol)

## 2 Transport Layer
- Adds the header adds the trailer adds the port number 
- The process of Adding the header and all the above is callled encapsulation and checks how does the message has be sent
- it has two ways if its a connection oriented then we go for the **TCP**
	- In the Connection oriented we use the 3 way handshake
	- It is very reliable provides flow control and congestion control
	- It get the acknowledgement if the data isnt been sent properly (data loss) then you can go for the Retransmission)(This is done by the router itself)
	- But the speed is low compared to UDP
- (Segments) if its a connectionless oriented then we go for the UDP(Datagram)
	- no acknowledgement
	- not reliable 
	- speed is more
	- When you have small amount of Data you can go for the UDP
- SCTP (Stream Control Transmission Protocol):-
	- its the combination of the both TCP and UDP-
- The mean feature of the Transport Layer is (Flow Control, Error Control, Congestion Control)

## 3 Network Layer
- Adds the Ip Address after the TL Added the header to the segment but in so for that the IP Address is added
- Ip Address of the both source as well as the destination machine is added
- it identifies the root (Finding Shortest Path)
- ITs also called as the host - Host Connectivity(delivery) => Main Function
- It also checks weather or either a data is a point to point. or its sent to the group at that point of time it adds the different addresses
- It has some protocols (main protocols)
	- ICMP(Internet Control Message Protocol)
	- IGMP(Internet Group Management Protocol)
	- DHCP(Dynamic Host Control Protocol)(who are all the new introders)
	- ARP(Address Resolution Protocol)[Mapping of an IP to the Hardware Address]
- It also identifies the source to destination Ip adress
- It selects the best path out of every other path using the algorithms 
	- Some of the algorithms are 
	- Routing Information protocol(RiP)
	- OSPF=> Opent Shortest Path First

## 4 Data Link Layer
- It does the node to node delivery
- in other words it identifies the next node hardware address
- It adds the mac address
- Data Format is called as the frame
-  it its wired thats called as ethernet if its wireless then its called as WIFI
- Or sometimes it just goes by the point to point connection
- The Flow Control the error detection and the error correction is mainly done in the data link layer 
	- so for the error is determined by using the process of parity check (Odd or Even partity) These things are added at the trailer - 

## 5 Physical Layer
- if its wire connection converted to digital or analog signals(bits format)

# OSI Layer
- Open System Interconnection
- Adds up two more extra layer inside the Application Layer(Presentation Layer and the Session Layer)
- Some functionalities are added but not clearly mentioned
- The reason why it wasnt implemented in the real world was TCP was already implemented. Protocols for sessions and presentation layers are not clearly defined Not significant performance boost 

---

# NETWORK EDGE AND NETWORK CORE
- **Network Edge** is the end Device
- Sometimes these End Device is also called as the host machine
- **Access Network** The physical Links that connect the end system to the first router(edge router)
- **Network Core** is nothing but the connection of the routers.

## Access Net 
- Before it uses the existing telephone lines for the data transfer 
	- well that was slow 
	- phone calls and internet cant be done simultaneously 
	**DSL**
- Now we see the technologies like **DSL** (Digital Subscriber Line), Cable FTTH and 5G
	- its very popular
	- use existing telephone lines to the central office
	- both phone call and internet can be done in simultaneous format using splitter and DSLAM at central office
	- **downstream** (High Speed)refers to the speed at which data travels from the internet to your device (downloading, streaming), while **upstream** (Medium Speed)refers to the speed at which data travels from your device to the internet (uploading, sending emails)
	**Cable Network**
- Same cable network is used for internet access
- uses frequency division multiplexing.
- They require special modems called Cable Modems
- In Home Cable Modems are similar to the DSL
	**Cable Network (HFC)**
- Combination of the optical and coaxial cable (Hybrid Fibre Coaxial Access Net)
- Fibre optics connect cable head to neighbor hood level juncion and the coax connects to individual homes 
- its assymetric in nature(means the upload and download is one simultaneously) Today we use **DOCSIS** (Data over cable service interface specifications)  its 
	- Downstream bitRate=40MBPS and 1.2GBPS
	- Upstream Rates=30MBPs and 100MBPS
	**FTTH(Fibre to the Home)**
- Fiber optic cable comes directly from the internet provider all the way to your house.
- There are Two competitors
	- AON(Active Optical network)
	- PON(Passive Optical network)
	- **PON**
		- OLT :- Optical Line Terminator:- In Central Office it converts the optical singals to the electric signals
		- ONT:- Optical network terminator:- Available in each home connected to the splittter 
		- splitteer combines the data from a number of homes to a single shared fibre network
		- Users connect home router to the ONT to access the internet
	- **AON**
		- OLT:- in central office converts the ooptical signal to the electrical signal
		- ONT:- available in each home . One fibre leaves the central office for each home . This method is called as the **direct fibre**.
	**5G Fixed Wireless**
- Provides very high speed home internet without cabling
- we can use satellite links to provide the internet access
	**Ethernet**
- end system connect to this using the twisted pair or the copper wires
	**Wifi**
- works within  100ft 
- the basic speed is 11.54 MBPS
- AP Connect internet to through the wired / wireless tech

---
# PHYSICAL MEDIA
- Two hosts in the internet communicate using the Data packets
- the host transmits the packets(managable chunks) into the acess links at transmission rate R (also called as Bandwidth)
- Media is categorized into 2 types 
	- Guided Media :- Signals propogate in solid Media :- Copper Fibre, Coax
	- unguided Media:- Signals propogate freely ex:- Radio

- # Guided Media
	- **TWISTED PAIR**
	- Wires used in regular landline Telephone Networks
	- Least Expensive
	- Two insulated copper wires 
	- Wires twisted to avoid electrical interference
	- There are two verities 
		- Shielded twisted pair:-  Reduces interference more expensive harder to handle
		- Unshilelded:- Cheap flexible easy to install, installed during the construction of the buildings
	
	- **Co-Axial Cable**
	- Two concentric copper conductors are seperated by insulation material and covered by apdding
	- Used in Cable TB
	- Higher Bandwidth than Twisted Pair Cable

	- **Fibre Optic Cable**
	- Glass fibre is thin 
	- carries light pulses
	- light wave propogate by the continuous total Internal reflection
	- not affected by the external interference
	- High speed operation 10-100GBPS
	- Very Low error Rate
	- Preffered for long distance communication

- **UnGuided Media**
	- This technology is used in LAN, Cellular, Satellite Communication
	- signal is carried in waves of electromagnetic spectrum
	- The main drawback is 
		- Reflection from obj 
		- obstruction by obj
		- interference

![[Pasted image 20260428093702.png]]
TWISTED PAIR CABLE

![[Pasted image 20260428093736.png]]
COAXIAL CABLE

![[Pasted image 20260428093943.png]]
FIBRE OPTICS CABLE

**APPLICATION LAYER(PRINCIPLES)**
- Application layer assumes that there is a two way logical pipe to send and recieve the messages
- The only layer that provides services to access to the internet user
- Writing prog's that run diff end systems and communicate with each other over the internet that could be any language
- There are two protocols
- **STANDARD APPLICATION LAYER PROTOCOLS**
	- understand what type of the service they provide and how do they work
- **Non STANDARD APPLICATION LAYER PROTOCOLS** 
	- Write the two programs to provide services by user interacting with the Transport Layer and programs can assume the services of the lower four Layers
	- No need to get the permission from the internet authorites-

	## Application Architecture
### Client-Server
- Server → always ON, provides service
- Client → sends request
- Clients do not communicate with each other
- Heavy load on server
- Requires data centers
### Peer-to-Peer (P2P)
- No fixed server
- All nodes share responsibility
- More scalable
- Less secure
## What is a Process
- A running program = Process
- Communication happens between processes (not just computers)
## Socket (VERY IMPORTANT)
- Socket = interface between application layer and transport layer
- Acts like a door for communication
Key Idea:
- Two sockets are used
    - One at sender
    - One at receiver
![[Pasted image 20260428100628.png]]
## Socket Address
- Combination of:
    - IP address → identifies computer
    - Port number → identifies process
So:
- Communication = IP + Port
Example:
- IP = building
- Port = room number
## API (Application Programming Interface)
- Set of instructions between:
    - Application layer
    - Operating System (Transport layer)
Example:
- Socket interface
## Transport Layer Services (VERY IMPORTANT)
### 1. Reliable Data Transfer
- No data loss
- No duplication
- Used in:
    - Email
    - File transfer
### 2. Throughput
- Data transfer speed
- Important for:
    - Video streaming
    - Multimedia
### 3. Timing
- Controls delay
- Important for:
    - Real-time applications
    - Voice/video calls
### 4. Security
- Encryption
- Authentication
## Transport Protocols (MOST IMPORTANT)
### TCP
- Connection-oriented
- Reliable
- Uses 3-way handshake
- Provides:
    - Error control
    - Flow control
    - Congestion control
- Data unit = Segment
Analogy:
- Telephone call
### UDP
- Connectionless
- Unreliable
- No retransmission
- Faster
- Data unit = Datagram
Analogy:
- Post office
### SCTP
- Combination of TCP and UDP
- Reliable and message-oriented
- Features:
    - Multi-streaming
    - Multi-homing
## Application Layer Protocol Definition
Defines:
- Message type (request/response)
- Syntax
- Meaning (semantics)
- Rules for communication
# Final Summary (Full Working)
## How Everything Works

1. User opens an application (e.g., browser)
2. Application runs as a process
3. Process uses a socket to communicate
4. Socket uses API to interact with transport layer
5. Transport layer (TCP/UDP/SCTP):
    - Sends data (reliable or fast depending on protocol)
6. Data travels through the network
7. At receiver:
    - Socket receives data
    - Data delivered to correct process using port number
## End-to-End Flow
Application → Socket → Transport Layer → Network → Receiver → Socket → Application

---





