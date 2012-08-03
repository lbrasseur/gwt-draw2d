package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Command.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Command extends Component {
    /**
     * Default constructor.
     */
    public Command() {
        super();
    }

    /**
     * Constructor passing JavaScriptObject.
     * @param aJsObj the JavaScriptObject
     */
    public Command(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }

    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Command();
    }-*/;
    
	public final native void cancel() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
		jsThis.cancel();
	}-*/;
	public final native void execute() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
		jsThis.execute();
	}-*/;   
    
    public final native Boolean canExecute() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
		return jsThis.canExecute();
	}-*/;
    
    public final native Figure getLabel() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
	    var figure = @org.gwtdraw2d.client.Figure::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getLabel());
	    return figure;
	}-*/;
	public final native void redo() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
		jsThis.redo();
	}-*/;   
	public final native void undo() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Command::getJsObj()();
		jsThis.undo();
	}-*/;   
    
}
