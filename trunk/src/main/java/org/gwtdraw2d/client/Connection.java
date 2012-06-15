package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Connection.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Connection extends Line {
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
    
    public final native void setSource(final Port port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Connection::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.setSource(jsPort);
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
