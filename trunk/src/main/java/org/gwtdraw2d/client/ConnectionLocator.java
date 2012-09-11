package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ConnectionLocator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ConnectionLocator extends Locator {
	private Connection connection;
	
	public ConnectionLocator() {
		super();
	}    
	public ConnectionLocator(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
	
	public ConnectionLocator(final Connection passedConnection) {
		this.connection = passedConnection;
		this.setJsObj(initialize());
		super.initComponent();
    } 
	
    protected native JavaScriptObject initialize() /*-{ 
	    var connection = this.@org.gwtdraw2d.client.ConnectionLocator::connection;	    
	    var jsConnection = connection.@org.gwtdraw2d.client.Connection::getJsObj()();
		return new $wnd.draw2d.ConnectionLocator(jsConnection);		
	}-*/;
	
}
