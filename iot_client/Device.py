class Device:
    def __init__(self, name, password, token) -> None:
        self.name = name
        self.password = password
        self.token = token
        self.state = 0
        pass

    def __repr__(self)->str:
        return self.name + " " + self.password + " " +self.token
        pass

    pass