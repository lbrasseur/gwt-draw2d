package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ConnectionDecorator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ConnectionDecorator extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.ConnectionDecorator();
    }-*/;    
    
    public ConnectionDecorator(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}
}
