package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Connection.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Connection extends Line {	
	public Connection() {
		this.create();
	}
	
    public Connection(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Connection();
    }-*/;
    
    public final native void setRouter(final ConnectionRouter router) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
        var jsRouter = router.@org.gwtdraw2d.client.ConnectionRouter::getJsObj()();
		
		jsThis.setRouter(jsRouter);
    }-*/;
    public final native Point getEndPoint() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
	    var point = @org.gwtdraw2d.client.Point::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getEndPoint());
	    return point;
	}-*/;
	
	public final native int getLineWidth() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();	
		return jsThis.getLineWidth();
	}-*/;
 
	public final native Boolean containsPoint(final int px, final int py) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
		return jsThis.containsPoint(px, py);
	}-*/;
    
	public final native int getCoronaWidth() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();	
		return jsThis.getCoronaWidth();
	}-*/;
	
    public final native ArrayList getConnections() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();        
	    var returnChildren = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getConnections());
	    return returnChildren;
	}-*/;
    
    public final native void setSource(final Port port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.setSource(jsPort);
    }-*/;
    
    public final native Boolean isResizeable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
		return jsThis.isResizeable();
	}-*/;
    
    public final native Port getTarget() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
	    var port = @org.gwtdraw2d.client.Port::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getTarget());
	    return port;
	}-*/;
    
    public final native ConnectionRouter getRouter() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
	    var router = @org.gwtdraw2d.client.ConnectionRouter::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getRouter());
	    return router;
	}-*/;
    
    public final native Port getSource() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
	    var port = @org.gwtdraw2d.client.Port::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getSource());
	    return port;
	}-*/;
    
    public final native void setTarget(final Port port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.setTarget(jsPort);
    }-*/;
    
    public final native void setTargetDecorator(final ConnectionDecorator decorator ) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
        var jsConnectionDecorator = decorator.@org.gwtdraw2d.client.ConnectionDecorator::getJsObj()();
        
        jsThis.setTargetDecorator(jsConnectionDecorator);
    }-*/;
    
}
