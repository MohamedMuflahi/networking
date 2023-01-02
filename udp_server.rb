require 'socket'

# Create a UDP socket
server = UDPSocket.new

# Bind the socket to a port
server.bind('localhost', 10000)

while true
  # Receive data from the client
  data, client = server.recvfrom(1024)

  # Send a response to the client
  server.send("ACK\n", 0, client[3], client[1])
end
