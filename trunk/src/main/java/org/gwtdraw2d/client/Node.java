package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Node.
 * @author lautaro.brasseur
 */
public class Node extends Figure {
	
	
    public Node(JavaScriptObject aJsObj) {
		super(aJsObj);
	}
    
    public Node(){
    	this.create();
    }

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Node();
    }-*/;

    
    /**
     * Adds a port.
     * @param port The port
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    public final native void addPort(final Port port,
            final int x, final int y) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.addPort(jsPort, x, y);
    }-*/;    
    /**
     * Removes a port.
     * @param port The port
     * @param x The X coordinate
     * @param y The Y coordinate
     */
    public final native void removePort(final Port port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();
        var jsPort = port.@org.gwtdraw2d.client.Port::getJsObj()();

        jsPort.setWorkflow(jsThis.workflow);
        jsThis.removePort(jsPort);
    }-*/;
    
    /**
     * Returns the port by the name
     * @param port
     * @return
     */
    public final native Port getPort(final String port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPort = @org.gwtdraw2d.client.Port::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getPort(port));
        return returnPort;
    }-*/;
    /**
     * Returns the input ports
     * @param port
     * @return
     */
    public final native ArrayList getPorts() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPorts = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getPorts());
        return returnPorts;
    }-*/;
    /**
     * Returns the input ports
     * @param port
     * @return
     */
    public final native ArrayList getModelSourceConnections() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var sourceConnections = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getModelSourceConnections());
        return sourceConnections;
    }-*/;
    
    /**
     * Returns the input port by the name
     * @param port
     * @return
     */
    public final native Port getInputPort(final String port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPort = @org.gwtdraw2d.client.InputPort::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getInputPort(port));
        return returnPort;
    }-*/;
    /**
     * Returns the input ports
     * @param port
     * @return
     */
    public final native ArrayList getInputPorts() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPorts = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getInputPorts());
        return returnPorts;
    }-*/;
    /**
     * Returns the output port by the name
     * @param port
     * @return
     */
    public final native Port getOutputPort(final String port) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPort = @org.gwtdraw2d.client.OutputPort::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getOutputPort(port));
        return returnPort;
    }-*/;
    /**
     * Returns the input ports
     * @param port
     * @return
     */
    public final native ArrayList getOutputPorts() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Node::getJsObj()();        
        var returnPorts = @org.gwtdraw2d.client.ArrayList::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getOutputPorts());
        return returnPorts;
    }-*/;
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native void setBackgroundColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();

        jsThis.setBackgroundColor(jsColor);
    }-*/;
    
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native Color getBackgroundColor() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();

        return jsThis.getBackgroundColor();
    }-*/;
    
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native void setColor(final Color color) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();

        jsThis.setColor(jsColor);
    }-*/;
    
    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public native void setLineWidth(final int width) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Figure::getJsObj()();
        
        jsThis.setLineWidth(width);
    }-*/;
    
    
    
    
}
