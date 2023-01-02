require 'socket'

# Create a UDP socket
client = UDPSocket.new

# Send a message to the server
server = 'localhost'
port = 10000
client.send("Hello, server!", 0, server, port)

# Receive a response from the server
response, _ = client.recvfrom(1024)
puts "Received response: #{response}"

