package sustainup;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.ObjectOutputStream;
import java.net.*;

public class ServerThread extends Thread {
	Server server;
	
	Socket s;
	ObjectOutputStream oos;
	BufferedReader ois;
	
	int threadIndex;
	
	public ServerThread(Server server, Socket incoming, int threadIndex)
	{
		try
		{
			this.server = server;
			s = incoming;
			oos = new ObjectOutputStream(s.getOutputStream());
			ois = new BufferedReader(new InputStreamReader(s.getInputStream()));
			this.threadIndex = threadIndex;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void run()
	{
		while(true)
		{
			
		}
	}
}
