package sustainup;

import java.io.IOException;
import java.net.*;
import java.util.*;

public class Server {
	
	private Vector<ServerThread> threads;
	private ServerSocket ss;
	
	public Server(int port)
	{
		try 
		{
			threads = new Vector<ServerThread>();
			ss = new ServerSocket(port);
			System.out.println("Listening on port " + port);
			int threadIndex = 0;
			while(true)
			{
				Socket s = ss.accept();
				threads.add(new ServerThread(this, s, threadIndex));
				threadIndex++;
				threads.get(threads.size() - 1).start();
			}
		} catch (IOException e) 
		{
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args)
	{
		Server server = new Server(6789);
	}
}
