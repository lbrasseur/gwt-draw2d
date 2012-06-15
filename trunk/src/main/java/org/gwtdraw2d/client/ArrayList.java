package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ArrayList.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ArrayList extends Component {
    public ArrayList(){
    	this.create();
    }
    
    public ArrayList(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }
    
	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.ArrayList();
    }-*/;
}
