package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ManhattenMidpointLocator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ManhattenMidpointLocator extends ConnectionLocator {
	private Connection connection;
	private String connectionId;
	
	public ManhattenMidpointLocator() {
		super();
	}   
	
	public ManhattenMidpointLocator(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
	
	public ManhattenMidpointLocator(final Connection passedConnection) {
		this.connection = passedConnection;			
		this.setJsObj(initialize());
		super.initComponent();
    }
	
    protected final native JavaScriptObject initialize() /*-{    
        var jsConnection = this.@org.gwtdraw2d.client.ManhattenMidpointLocator::connection;
        var jsObject = jsConnection.@org.gwtdraw2d.client.Connection::getJsObj()();
        return new $wnd.draw2d.ManhattanMidpointLocator(jsObject);	
	}-*/;
	
}
