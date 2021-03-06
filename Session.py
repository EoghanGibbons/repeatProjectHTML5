class Session:	
	WAITING_FOR_PLAYERS=0;
	STARTING_GAME=1;

	def __init__(self):		
		self.gameState = Session.WAITING_FOR_PLAYERS
		self.player=list()

	def addPlayer(self, pid):
		
		result = True;
		if(len(self.player) < 2):
			self.player.append(pid)	
			self.setState(Session.WAITING_FOR_PLAYERS)
			#if there are now 2 players
			if(len(self.player) == 2):
				self.setState(Session.STARTING_GAME)		
		elif(len(self.player) == 2):			
			result = False;

		return result;


	def getNumPlayers(self):
		return len(self.player)

	def getState(self):
		return self.gameState

	def setState(self,gameState):
		self.gameState = gameState

	def getStateAsString(self, state):
		pass

