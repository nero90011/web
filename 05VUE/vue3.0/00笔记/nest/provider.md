# provider

    Providers 是Nest的一个基本概念。许多基本的Nest类可能被视为 provider -service,repository,factory,helper等等。 他们都可以通过constructor注入依赖关系。 这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给Nest运行时系统。 Provider只是一个用@Injectable()装饰器注释的类。


    nest g service name