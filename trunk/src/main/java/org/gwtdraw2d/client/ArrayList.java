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
    
	public final native int getSize() /*-{
		var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
		return jsThis.getSize();
	}-*/;
	
	public final native void resize() /*-{
		var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
		jsThis.resize();
	}-*/;

	public final native void reverse() /*-{
		var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
		jsThis.reverse();
	}-*/;
	
	public final native void trimToSize() /*-{
		var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
		jsThis.trimToSize();
	}-*/;

	public final native void removeAllElements() /*-{
		var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
		jsThis.removeAllElements();
	}-*/;
    public final native Component get(final int i) /*-{
	    var jsThis = this.@org.gwtdraw2d.client.ArrayList::getJsObj()();
	    var figure = @org.gwtdraw2d.client.Figure::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.get(i));
	    return figure;
	}-*/;
    
}
